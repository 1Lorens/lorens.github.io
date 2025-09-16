<?php
$certificates = [
    ['title' => 'Analyze Data with Python', 'subtitle' => 'Data Analysis', 'image' => 'img/cert/GreatLearning.jpg'],
    ['title' => 'Visualize Data with Python', 'subtitle' => 'Data Visualization', 'image' => 'img/cert/GreatLearning.jpg'],
    ['title' => 'Basic Statistics with Python', 'subtitle' => 'Statistics', 'image' => 'img/cert/GreatLearning.jpg'],
    ['title' => 'Intro to Databases and SQL', 'subtitle' => 'Database Management', 'image' => 'img/cert/GreatLearning.jpg'],
    ['title' => 'Python Fundamentals', 'subtitle' => 'Programming Basics', 'image' => 'img/cert/GreatLearning.jpg'],
    ['title' => 'Analyze Data with Python', 'subtitle' => 'Data Analysis', 'image' => 'img/cert/GreatLearning.jpg'],
    ['title' => 'Python Fundamentals', 'subtitle' => 'Programming Basics', 'image' => 'img/cert/GreatLearning.jpg'],
    ['title' => 'Visualize Data with Python', 'subtitle' => 'Data Visualization', 'image' => 'img/cert/GreatLearning.jpg'],
    ['title' => 'Basic Statistics with Python', 'subtitle' => 'Statistics', 'image' => 'img/cert/GreatLearning.jpg'],
    ['title' => 'Intro to Databases and SQL', 'subtitle' => 'Database Management', 'image' => 'img/cert/GreatLearning.jpg'],
];

$certificate_json = json_encode($certificates);
echo '<script>const allCertificates = ' . $certificate_json . ';</script>';
?>
<div id="certificateContainer"></div>
<div class="pagination">
    <button id="prevBtn">&laquo; </button>
    <div id="pageNumbers"></div>
    <button id="nextBtn"> &raquo;</button>
</div>