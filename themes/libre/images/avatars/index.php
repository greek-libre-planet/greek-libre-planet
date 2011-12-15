<?php
$title = "Hackergotchi Heads!";
$sub_title = "from Planet EL/LAK";

$dir = ".";
$handle = opendir($dir);
$i = 0;
while ( $file = readdir($handle) ) {
    if (eregi(".png$",$file)) {
        $folder[$i]=$file;
        $i=$i+1;
    }
};

$photos = $i;
closedir($handle);
sort($folder);
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<title>planet hackergotchis</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="icon" href="favicon.png" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
<link rel="stylesheet" href="planet.css" type="text/css">
<link href='http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=greek,latin' rel='stylesheet' type='text/css'>
</head>

<body>

<div class="heads">

<?php
for ($count=0; $count < $photos; $count++) {
    echo "<div style=\"display:inline;padding:4px;\"><img src=".$folder[$count]."></div>";
}
?>

</div>

</body>
</html>

