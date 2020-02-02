<?php require_once('./templates/header.php'); ?>


<div class="header">
    <!-- Inclued the page headers: Titles and Breadcrumbs -->
    <?php require_once('./templates/page-header.php') ?>
</div>

<div class="container">
    <div id="main-section">
        <!-- Add the Page Summery -->
        <?php require_once('./templates/page-summery.php'); ?>

        <h3 class="main-section_titles">
            Download the windows reaper tool
        </h3>
        <!-- Add the Main page body -->
        <?php require_once('./templates/download-tool.php') ?>

        <h3 class="main-section_titles">
            Contact Us
        </h3>
        <!-- Add the Contact Us Form  -->
        <?php require_once('./templates/contact-us.php'); ?>


        <div id="formData">


        </div>




    </div>

    <div id="right-size">
        <!-- Add Sidebar -->
        <?php require_once('./templates/sidebar.php'); ?>
    </div>

</div>
<?php require_once('./templates/footer.php'); ?>