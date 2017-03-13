#Name:Shahane,Shweta Kisan
#Acc_No:jadrn058


#!/usr/bin/perl

use DBI;
use CGI;

my $cgi = new CGI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn058";
my $username = "jadrn058";
my $password = "boxes";
my $database_source = "dbi:mysql:$database:$host:$port";
my $response = "";

my $dbh = DBI->connect($database_source, $username, $password)
or die 'Cannot connect to db';

my $sku = $cgi->param('sku');
my $catID = $cgi->param('cat');
my $subcatID = $cgi->param('subcat');
my $venID = $cgi->param('ven');
my $manuID = $cgi->param('mfgIdentity');
my $description = $cgi->param('desc');
my $features= $cgi->param('prodFeatures');
my $cost = $cgi->param('cost');
my $retail = $cgi->param('retail');
my $image = $cgi->param('image');



my $query = "INSERT INTO product(sku,catID,subcatID,venID,
mnfgIdentity,description,features,cost,retail,image)
VALUES ('$sku', '$catID', '$subcatID','$venID', '$manuID', '$description',
'$features', '$cost', '$retail',
'$image');";

my $sth = $dbh->prepare($query);
$sth->execute();

if($sth){
  $response="The record has been successfully inserted into the database";
}
else
  {
    $response="The record not added";
  }

$dbh->disconnect();

print "Content-type: text/html\n\n";
print $response;
