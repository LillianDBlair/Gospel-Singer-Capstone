export default () => `
<h3>Contact Form</h3>

    <p class="center" style="font-size: 30px;">You can put your information here,</p>
    <p class="center" style="font-size: 30px;">if you would like to know where I will be singing next</p>
    <p class="center" style="font-size: 30px;">or if you would like to leave a prayer request.</p>

  
  <form  name="contact-form" action="https://formspree.io/xlepjepg" method="POST" action="/action_page.php">

      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"><br>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br>
      <label for="subject">Subject:</label>
      <input type="subject" id="subject" name="subject"><br><br>
      <label for="Message" style="text-align: left;">Message</label><br>
      <textarea id="message"  placeholder="Message" rows="4" cols="50"></textarea>
  <br><br>
  <div style="text-align:center">  
    <input type="button" value="Submit" id="btnsubmit" onclick="submitForm()"> 
</div>
  </form>
`;
