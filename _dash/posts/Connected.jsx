import Form from '../components/Form.jsx';
import { connect } from 'react-redux';
import data from './data/data.json';

const mapStateToProps = state => {
    return {
        packageInfo: data
    };
  };
  
export default connect(mapStateToProps)(Form);