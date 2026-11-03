"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const CreateUser = () => {
  ///////
  const onSubmit = async (e) => {
    {
      // user form data
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.insertedId) {
        redirect("/users");
      }
    }
  };
  return (
    <div className="flex justify-center items-center border p-10 rounded-[10px] w-fit m-auto bg-green-200">
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        {/* //////////////////////////////////////////////////////////// */}
        <TextField
          isRequired
          name="name"
          aria-label="your-name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="John Doe" />
          <FieldError />
        </TextField>
        {/* //////////////////////////////////////////////////////////// */}
        <TextField
          isRequired
          name="email"
          type="email"
          aria-label="your-email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>

          <Input placeholder="john@example.com" aria-label="your-email" />
          <FieldError />
        </TextField>

        {/* //////////////////////////////////////////////////////////// */}
        <TextField isRequired minLength={11} name="number" type="number">
          <Label>Mobile Number</Label>
          <Input
            placeholder="Enter your phone number"
            aria-label="your-number"
          />
          <FieldError />
        </TextField>

        {/* //////////////////////////////////////////////////////////// */}
        <div className="flex gap-2">
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateUser;
