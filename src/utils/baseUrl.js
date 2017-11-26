let host = location.host;
let href = host.split(".");
let domain = "http://test-payapi.rswallet.com";
switch (href[0]) {
case "scan":
  domain = "https://wgw.rswallet.com";
  break;
case "test-scan":
  domain = "http://test-payapi.rswallet.com";
  break;
default:
  domain = "http://test-payapi.rswallet.com";
  break;
}
export default domain || "http://test-payapi.rswallet.com";