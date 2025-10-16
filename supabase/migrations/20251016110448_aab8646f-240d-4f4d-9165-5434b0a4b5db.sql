-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Users can view their own roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles
  FOR SELECT
  USING (auth.uid() = user_id);

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Add admin policies for destinations
CREATE POLICY "Admins can insert destinations"
  ON public.destinations
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update destinations"
  ON public.destinations
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete destinations"
  ON public.destinations
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Add admin policies for packages
CREATE POLICY "Admins can insert packages"
  ON public.packages
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update packages"
  ON public.packages
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete packages"
  ON public.packages
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Add validation constraints for bookings
ALTER TABLE public.bookings 
  ADD CONSTRAINT check_num_travelers CHECK (num_travelers > 0 AND num_travelers <= 20),
  ADD CONSTRAINT check_total_amount CHECK (total_amount > 0),
  ADD CONSTRAINT check_future_travel_date CHECK (travel_date >= CURRENT_DATE);

-- Add length constraint for special_requests
ALTER TABLE public.bookings
  ADD CONSTRAINT check_special_requests_length CHECK (char_length(special_requests) <= 1000);