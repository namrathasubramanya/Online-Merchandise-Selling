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


my $query = "DELETE FROM product WHERE sku='$sku'";

my $sth = $dbh->prepare($query);
$sth->execute();

if($sth){
  $response="The record has been deleted successfully";
}
else
  {
    $response="The record not added";
  }

$dbh->disconnect();

print "Content-type: text/html\n\n";
print $response;
