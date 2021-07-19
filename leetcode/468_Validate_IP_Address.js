/**
 * @param {string} IP
 * @return {string}
 */

var validIPAddress = function (IP) {
  const isIpv4Type = IP.indexOf(".") !== -1;
  const isIpv6Type = IP.indexOf(":") !== -1;

  const validIpv4Element = str => {
    if (!str || str.length > 3 || parseInt(str) > 255) return false;
    if (str === "0") return true;

    let isOkay = true;
    const allChars = str.split("");

    for (let i = 0; i < allChars.length; i++) {
      const digit = allChars[i];
      const asciiValue = digit.charCodeAt();

      if (
        (i === 0 && digit == "0") ||
        !(asciiValue >= 48 && asciiValue <= 57)
      ) {
        isOkay = false;
        break;
      }
    }
    return isOkay;
  };

  const validIpv6Element = str => {
    if (!str || str.length > 4) return false;

    let isOkay = true;
    const allChars = str.split("");

    for (let i = 0; i < allChars.length; i++) {
      const char = allChars[i];
      const asciiValue = char.charCodeAt();
      if (
        !(asciiValue >= 48 && asciiValue <= 57) &&
        !(asciiValue >= 97 && asciiValue <= 102) &&
        !(asciiValue >= 65 && asciiValue <= 70)
      ) {
        isOkay = false;
        break;
      }
    }
    return isOkay;
  };

  if (isIpv4Type) {
    const ipv4Elements = IP.split(".");
    if (ipv4Elements.length !== 4) return "Neither";

    let isIpv4 = true;
    for (let i = 0; i < ipv4Elements.length; i++) {
      const part = ipv4Elements[i];
      if (!validIpv4Element(part)) {
        isIpv4 = false;
        break;
      }
    }
    return isIpv4 ? "IPv4" : "Neither";
  } else if (isIpv6Type) {
    const ipv6Elements = IP.split(":");
    if (ipv6Elements.length !== 8) return "Neither";
    let isIpv6 = true;
    for (let i = 0; i < ipv6Elements.length; i++) {
      const part = ipv6Elements[i];
      if (!validIpv6Element(part)) {
        isIpv6 = false;
        break;
      }
    }
    return isIpv6 ? "IPv6" : "Neither";
  }

  return "Neither";
};

// console.log(validIPAddress("172.16.254.1"));
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
// console.log(validIPAddress("256.256.256.256"));
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334:"));
// console.log(validIPAddress("1e1.4.5.6"));
console.log(validIPAddress("172.16.254.10"));
