#Name:Shahane,Shweta Kisan
#Acc_No:jadrn058

use CGI;
use CGI::Session;
use CGI::Carp qw (fatalsToBrowser);

my $q = new CGI;
my $sid = $q->cookie('jadrn058SID') || undef;
$session = new CGI::Session(undef, $sid, {Directory => '/tmp'});
$session->clear();
$session->delete();
my $cookie = $q->cookie(jadrn058SID => '');
my $value=$q->cookie('jadrn058SID');
print $q->header( -cookie=>$cookie );

my $response="";

if($value){
  $response="Fail";
  }
else{
  $response="Success";
  }

print $response;
