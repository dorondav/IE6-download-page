<form method="post" action='#' id="contact-us">
    <div class="input-group">
        <label for="name">Name:<span class="asterisk">*</span></label>
        <input type="text" name="name" class="input-style" id="name">
    </div>

    <div class="input-group">
        <label for="email">Email:<span class="asterisk">*</span></label>
        <input type="text" email="email" class="input-style" id="email">
    </div>
    <div class="input-group" id="textarea">
        <label for="message">Message:<span class="asterisk">*</span></label>
        <textarea name="message" id="message" class="input-style" rows="10"></textarea>
    </div>
    <div class="form-actions">
        <div id="asterisk-msg"></div>
        <input type="submit" id="form-btn" value="Submit">
    </div>
</form>