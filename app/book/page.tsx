"use client";

import { SetStateAction, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Raleway } from "next/font/google";
import { MapPinIcon } from "lucide-react";
import { DatePicker } from "@/components/ui/datepicker";
import { addDays } from "date-fns";

const raleway = Raleway({ subsets: ["latin"] });

const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string(),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(1, "Mobile/Telephone is required"),
  alternateEmail: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
  date: z.date(),
  hour: z.string().min(1, "Hour is required"),
  mint: z.string().min(1, "Minute is required"),
  timeOfDay: z.string().min(1, "AM/PM is required"),
  comment: z.string().min(10, "Comment is required"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookAppointment: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      date: new Date(),
    },
  });

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    console.log(data);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleRadioChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className={`bg-primary-b text-gen-color px-16 py-10 ${raleway.className}`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-gen-color grid grid-cols-3 gap-4 rounded-lg border-2 p-7"
      >
        <div></div>
        <div className="col-span-2">
          <h1 className="text-5xl font-light">Book Appointment</h1>
        </div>

        <div className="border-gen-color border-r pr-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Personal Details</h2>
            <div>
              <input
                {...register("firstName")}
                type="text"
                id="firstName"
                className="w-full border-b border-gray-400 bg-transparent"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("lastName")}
                type="text"
                id="lastName"
                className="w-full border-b border-gray-400 bg-transparent"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                {...register("address")}
                type="text"
                id="address"
                className="w-full border-b border-gray-400 bg-transparent"
                placeholder="Enter Address"
              />
              <MapPinIcon className="absolute right-0 top-0 size-5 text-gray-600" />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="mt-7 text-xl font-semibold">Contact Details</h2>
            <div>
              <input
                {...register("mobile")}
                type="tel"
                id="mobile"
                className="w-full border-b border-gray-400 bg-transparent"
                placeholder="Mobile/Telephone"
              />
              {errors.mobile && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="w-full border-b border-gray-400 bg-transparent"
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("alternateEmail")}
                type="email"
                id="alternateEmail"
                className="w-full border-b border-gray-400 bg-transparent"
                placeholder="Alternate Email Address"
              />
              {errors.alternateEmail && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.alternateEmail.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="border-gen-color mb-4 space-y-4 border-b pb-6">
            <h2 className="text-xl font-semibold">Date & Timings</h2>

            <div className="grid grid-cols-2 gap-x-5">
              <div>
                <Controller
                  name="date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker date={field.value} setDate={field.onChange} />
                  )}
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.date.message}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <input
                  {...register("hour")}
                  type="text"
                  id="hour"
                  className="border-gen-color w-10 rounded-md border bg-transparent p-1"
                />
                {errors.hour && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.hour.message}
                  </p>
                )}
                <h1 className="text-xl font-bold">:</h1>
                <input
                  {...register("mint")}
                  type="text"
                  id="hour"
                  className="border-gen-color w-10 rounded-md border bg-transparent p-1"
                />
                {errors.mint && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.mint.message}
                  </p>
                )}

                <div>
                  {errors.mint && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.mint.message}
                    </p>
                  )}
                  <div className="flex items-center">
                    <Controller
                      name="timeOfDay"
                      control={control}
                      render={({ field }) => (
                        <label
                          className={`border-gen-color flex items-center rounded-l-lg border p-2 hover:cursor-pointer ${selectedOption === "AM" ? "bg-gen-color text-header-text" : ""}`}
                        >
                          <input
                            {...field}
                            type="radio"
                            value="AM"
                            className="absolute opacity-0"
                            onClick={handleRadioChange}
                          />
                          AM
                        </label>
                      )}
                    />
                    <Controller
                      name="timeOfDay"
                      control={control}
                      render={({ field }) => (
                        <label
                          className={`border-gen-color flex items-center rounded-r-lg border p-2 hover:cursor-pointer ${selectedOption === "PM" ? "bg-gen-color text-header-text" : ""}`}
                        >
                          <input
                            {...field}
                            type="radio"
                            value="PM"
                            className="absolute opacity-0"
                            onClick={handleRadioChange}
                          />
                          PM
                        </label>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="comment" className="text-2xl">
              Comment
            </label>
            <textarea
              {...register("comment")}
              id="comment"
              rows={5}
              className="mt-4 w-full rounded-xl border border-gray-400 bg-transparent p-4 outline-none"
              placeholder="Write any instruction here"
            ></textarea>
          </div>
        </div>

        <div className="col-span-3 flex w-full items-center justify-center">
          <div>
            <button
              type="reset"
              className="border-gen-color text-gen-color mt-4 w-28 rounded-3xl border bg-transparent px-2 py-1"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="border-genColor bg-gen-color text-header-text ml-4 w-28 rounded-3xl border px-4 py-1"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
