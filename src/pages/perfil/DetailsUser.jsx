import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import FormEndereco from '../../components/form/FormUserEndereco.jsx';
import FormContato from '../../components/form/FormUserContato.jsx';


function TabsUser() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="profile" title="Profile">
        <FormEndereco />
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <FormContato />
      </Tab>
    </Tabs>
  );
}

export default TabsUser;