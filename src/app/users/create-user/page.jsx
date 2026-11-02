"use client";
import Link from "next/link";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
const CreateNewUser = () => {
  //
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Data:", data);
    //

    const response = await fetch("http://localhost:5000/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    // console.log("Result:", result);
    if (result.insertedId) {
      redirect("/");
    }
  };
  return (
    <div className="p-4">
      <div>
        <Link className="border py-1 px-2 rounded-[10px]" href="/">
          Go Back
        </Link>
        <p>Create New User</p>
      </div>
      <div className="p-4 border rounded-[10px] bg-gray-300">
        <Form className="w-full max-w-96" onSubmit={onSubmit}>
          <Fieldset>
            <Fieldset.Legend>Profile Settings</Fieldset.Legend>
            <Description>Update your profile information.</Description>
            <FieldGroup>
              <TextField
                isRequired
                name="name"
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

              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              <TextField isRequired name="number" type="number">
                <Label>Phone Number</Label>
                <Input placeholder="01000000000" />
                <FieldError />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Button type="submit">Create User</Button>
              <Button type="reset" variant="secondary">
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
};

export default CreateNewUser;
