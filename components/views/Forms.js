export default () => `
<h5>Request Form</h5>

  <form name="request-form" action="https://formspree.io/xyyneyne" method="POST" action="/action_page.php">
    <p><h6>First & Last Name</h6></p>
    <input type="name" id="name" name="name" placeholder="Enter Name Here" cols="50"><br>
    <p><h6>Event Information</h6></p>
    <textarea id="Event Info" placeholder="Type Name,Date and Time of Event Here" rows="4" cols="50"></textarea><br>
    <p><h6>Song Selection Information</h6></p>
    <textarea rows="4" cols="50" placeholder="Put # of Songs & Name of Songs Here..."></textarea><br>
  <div style="text-align:center">  
  <input type="button" value="Submit" id="btnsubmit" onclick="submitForm()"> 
  </div>

  </form>
  `