#Name:Shahane,Shweta Kisan
#Acc_No:jadrn058

#!/usr/bin/perl

use DBI;
use CGI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn058";
my $username = "jadrn058";
my $password = "boxes";
my $database_source = "dbi:mysql:$database:$host:$port";
my $response = "";

my $dbh = DBI->connect($database_source, $username, $password)
or die 'Cannot connect to db';

my $q = new CGI;
my $edit_sku = $q->param("sku");

my $query = "select * from product where sku='$edit_sku'";


my $sth = $dbh->prepare($query);
$sth->execute();

while(my @row=$sth->fetchrow_array()) {
    $response.=$row[0]."=".$row[1]."=".$row[2]."=".$row[3]."=".$row[4]."=".$row[5]."=".$row[6]."=".$row[7]."=".$row[8]."=".$row[9];
    }
if($response) {
    $response = $response;
    }
else {
    $response = "invalid";
    }

$dbh->disconnect();

print "Content-type: text/html\n\n";
print $response;
