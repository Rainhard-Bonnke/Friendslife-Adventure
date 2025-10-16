import { z } from "zod";

export const travelerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[1-9]\d{7,14}$/, "Please enter a valid phone number with country code")
    .optional(),
  passport: z
    .string()
    .trim()
    .max(20, "Passport number must be less than 20 characters")
    .optional(),
  dateOfBirth: z
    .string()
    .optional(),
});

export const bookingSchema = z.object({
  numTravelers: z
    .number()
    .int("Number of travelers must be a whole number")
    .min(1, "At least 1 traveler is required")
    .max(20, "Maximum 20 travelers per booking"),
  totalAmount: z
    .number()
    .positive("Total amount must be greater than 0"),
  travelDate: z
    .string()
    .refine((date) => new Date(date) >= new Date(new Date().setHours(0, 0, 0, 0)), {
      message: "Travel date must be today or in the future",
    }),
  travelerDetails: z
    .array(travelerSchema)
    .min(1, "At least one traveler is required")
    .max(20, "Maximum 20 travelers per booking"),
  specialRequests: z
    .string()
    .trim()
    .max(1000, "Special requests must be less than 1000 characters")
    .optional(),
  packageId: z.string().uuid("Invalid package ID"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
export type TravelerData = z.infer<typeof travelerSchema>;
