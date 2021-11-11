import Card from "../ui/Card";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetUpForm() {
  const titleInputref = useRef();

  function submitHandler(event) {
    event.preventDefault(); // bude preventovat to co by browser udelal defaultne
    const enteredTitle = titleInputref.current.value;
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Image</label>
          <textarea required id="description" rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;

// htmlFor je krome className dalsi jine oznaceni oproti klasickemu js.
