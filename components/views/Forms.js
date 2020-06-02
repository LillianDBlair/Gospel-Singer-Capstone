export default () => `
<h5>Request Form</h5>

  <form title="request-form" action="https://formspree.io/xyyneyne" method="POST" action="/action_page.php">
    <p><h3>First & Last Name</h3></p>
    <input type="name" id="name" name="name" placeholder="Enter Name Here" cols="50"><br>
    <p><h3>Event Information</h3></p>
    <textarea id="Event Info" placeholder="Type Name,Date and Time of Event Here" rows="4" cols="50"></textarea><br>
    <p><h3>Song Selection Information</h3></p>
    <textarea rows="4" cols="50" placeholder="Put # of Songs & Name of Songs Here..."></textarea><br>
  <div style="text-align:center">  
  <input type="submit" value="Submit"> 
  </div>

  </form>
  `;
