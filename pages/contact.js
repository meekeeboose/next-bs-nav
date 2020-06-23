import Head from "next/head";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Mediavil | Contact</title>
      </Head>

      {/* FORM */}
      <form action='https://formspree.io/mqkybokb' method='POST'>
        <div class='form-group'>
          <label for='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            name='_replyto'
            class='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
          <small id='emailHelp' class='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>

        <div class='form-group'>
          <label for='exampleFormControlTextarea1'>Your message</label>
          <textarea
            class='form-control'
            id='exampleFormControlTextarea1'
            name='message'
            rows='3'></textarea>
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
