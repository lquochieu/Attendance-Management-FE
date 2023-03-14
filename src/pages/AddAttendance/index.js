import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, FormControl, Input, Paper } from "@material-ui/core";

export default function AddAttendance() {
    const [textValue, setTextValue] = useState("");

    const onTextChange = (e) => setTextValue(e.target.value);
    const handleSubmit = () => console.log(textValue);
    const handleReset = () => setTextValue("");

    return (
        <FormControl>
            <legend>Title</legend>
            <Input label="Required Text Field" required={true} />
            <Input label="Required Email Address" type="email" floatingLabel={true} required={true} />
            <Input label="Email Address" type="email" defaultValue="Validation error" />
            <Button variant="raised">Submit</Button>
        </FormControl>
    );
};