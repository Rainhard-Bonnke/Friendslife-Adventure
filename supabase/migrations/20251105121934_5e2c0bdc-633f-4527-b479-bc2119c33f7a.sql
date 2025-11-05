-- Create storage bucket for package images
INSERT INTO storage.buckets (id, name, public)
VALUES ('package-images', 'package-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage bucket for destination images
INSERT INTO storage.buckets (id, name, public)
VALUES ('destination-images', 'destination-images', true)
ON CONFLICT (id) DO NOTHING;

-- RLS policies for package images storage
CREATE POLICY "Public can view package images"
ON storage.objects FOR SELECT
USING (bucket_id = 'package-images');

CREATE POLICY "Admins can upload package images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'package-images'
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update package images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'package-images'
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete package images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'package-images'
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- RLS policies for destination images storage
CREATE POLICY "Public can view destination images"
ON storage.objects FOR SELECT
USING (bucket_id = 'destination-images');

CREATE POLICY "Admins can upload destination images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'destination-images'
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can update destination images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'destination-images'
  AND has_role(auth.uid(), 'admin'::app_role)
);

CREATE POLICY "Admins can delete destination images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'destination-images'
  AND has_role(auth.uid(), 'admin'::app_role)
);