import classNames from 'classnames/bind'
import styles from './heading.module.scss';

let cx = classNames.bind(styles);

const Col = ({children, width}) => {
    let columnClasses = cx({
        [`col-${width}`]: width
    });
    return <div className={columnClasses}>{children}</div>
}
export default Col