// Types for APIs go here

import internal from "stream";

interface Token {
  access: string
  refresh: string
}

interface User {
  username: string;
  organisation: string;
  
}

interface VerifiedUser {
  username: string;
  verified: boolean;
  uid:BigInteger;
}