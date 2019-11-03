import { Alert } from 'reactstrap';

export default class Forms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { packageInfo } = this.props;
        return (
            <div className="animated fadeIn">
                <Alert>{JSON.stringify(packageInfo)}</Alert>
            </div>
        );
    }
}
