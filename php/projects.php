<?php
$projects = [
    [
        'title' => 'Thesis Project',
        'subtitle' => 'A Geo-Analysis and Classification of 4P\'s Beneficiaries Data in Naic, Cavite.',
        'image' => 'img/proj/mappinghope1.jpg',
        'tags' => ['PHP', 'HTML', 'CSS', 'MySQL', 'GIS', 'Javascript'],
        'description' => 'This project involved collecting and analyzing geographical data of 4P\'s beneficiaries in Naic, Cavite. We utilized GIS (Geographic Information System) to map and visualize the data, and developed a system for classifying beneficiaries based on specific criteria. The project aimed to provide valuable insights to local government units for better resource allocation and planning.',
        'images' => [
            'img/proj/mappinghope1.jpg',
            'img/proj/mappinghope0.jpg',
            'img/proj/mappinghope2.jpg',
            'img/proj/mappinghope3.jpg',
            'img/proj/mappinghope4.jpg',
            'img/proj/mappinghope5.jpg',
            'img/proj/mappinghope6.jpg',
            'img/proj/mappinghope7.jpg',
            'img/proj/mappinghope8.jpg',
            'img/proj/mappinghope9.jpg',
            'img/proj/mappinghope10.jpg',
            'img/proj/mappinghope11.jpg',
            'img/proj/mappinghope12.jpg'
        ]
    ],
    [
        'title' => 'On the Job Training Project',
        'subtitle' => 'Library information system for Cavite Community Academy Inc. in Naic, Cavite.',
        'image' => 'img/proj/library1.jpg',
        'tags' => ['PHP', 'HTML', 'CSS', 'MySQL', 'Javascript'],
        'description' => 'I developed a comprehensive Library Information System during my On-the-Job Training. The system allows users to efficiently track book records, manage loans and returns, and maintain a digital catalog. This project streamlined library operations, improved data accuracy, and enhanced the overall user experience for students and staff.',
        'images' => [
            'img/proj/library1.jpg',
            'img/proj/library0.jpg',
            'img/proj/library2.jpg',
            'img/proj/library3.jpg',
            'img/proj/library4.jpg',
            'img/proj/library5.jpg',
            'img/proj/library6.jpg',
            'img/proj/library7.jpg'
        ]
        ],
        [
        'title' => '3D Rendering',
        'subtitle' => 'Rendered a 3D model of a School Building.',
        'image' => 'img/proj/3d1.jpg',
        'tags' => ['sketchup', '3D Modeling', 'Rendering'],
        'description' => 'I developed a comprehensive Library Information System during my On-the-Job Training. The system allows users to efficiently track book records, manage loans and returns, and maintain a digital catalog. This project streamlined library operations, improved data accuracy, and enhanced the overall user experience for students and staff.',
        'images' => [
            'img/proj/3d1.jpg',
            'img/proj/3d2.jpg',
            'img/proj/3d3.jpg',
            'img/proj/3d4.jpg',
            'img/proj/3d5.jpg'
        ]
        ]
];

$projects_json = json_encode($projects);
echo '<script>const allProjects = ' . $projects_json . ';</script>';

foreach ($projects as $index => $project) {
    echo '<div class="project-item" data-index="' . $index . '">';
    echo '    <img src="' . htmlspecialchars($project['image']) . '" alt="' . htmlspecialchars($project['title']) . '">';
    echo '    <h3>' . htmlspecialchars($project['title']) . '</h3>';
    echo '    <p>' . htmlspecialchars($project['subtitle']) . '</p>';
    echo '    <div class="project-tags">';
    foreach ($project['tags'] as $tag) {
        echo '<span>' . htmlspecialchars($tag) . '</span>';
    }
    echo '    </div>';
    echo '</div>';
}
?>