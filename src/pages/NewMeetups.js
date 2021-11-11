import NewMeetUpForm from "../components/meetups/NewMeetupForm";

function NewMeetUpsPage() {
  function addMeetupHandler(meetupData) {
    fetch('https://druha-appka-2-default-rtdb.firebaseio.com/meetups.json',
      // standard js function, that allows us to send http request
      // my tam dame tu url nasi realtime databaze na firebase. tam se budou odesilat meetupdata.
      {
        method: 'POST', // chceme posilat (post), ne odebirat (get - default)
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

  }
  return (
    <section>
      <h1>Added meetups</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}
export default NewMeetUpsPage;
