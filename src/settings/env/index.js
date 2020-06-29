import preval from "preval.macro";
import devEnv from "./env.dev.yml";

// load env vars
const envVars = preval`
	var envVars = {};
	envVars.env = process.env.NODE_ENV;
	module.exports =  envVars;
`;

log.trace("Env vars: ", envVars);

const dev = envVars?.env === "development";

const env = dev ? devEnv : prodEnv;
export default env;
