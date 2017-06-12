import Gatling from './gatling';
import childProcess from 'child_process';
import OS from './utils/os';

const gatling = new Gatling(process, new OS(process));
gatling.exec(childProcess.spawn);