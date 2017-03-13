#Name:Shahane,Shweta Kisan
#Acc_No:jadrn058

use CGI;
use CGI::Session;
use CGI::Carp qw (fatalsToBrowser);


my $q = new CGI;
my $cookie_sid = $q->cookie('jadrn058SID');
my $session = new CGI::Session(undef, $cookie_sid, {Directory=>'/tmp'});
my $sid = $session->id;

my $message = "";

if($cookie_sid eq $sid) {
$message = "Success";
}
else{
$message = "Fail";
}

print "Content-type: text/html\n\n";
print $message;
