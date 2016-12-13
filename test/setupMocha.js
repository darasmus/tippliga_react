import chai from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import './includes/setupFakeDom';

chai.use(chaiEnzyme());

chai.use(sinonChai);
chai.use(chaiAsPromised);

global.expect = chai.expect;
global.sinon = sinon;
