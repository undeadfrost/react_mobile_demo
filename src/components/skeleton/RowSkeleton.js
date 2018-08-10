import React, {Component} from 'react'
import styles from './index.less'

class RowSkeleton extends Component {
	render() {
		return (
			<div className={styles.row}>
				<div className={styles.left}></div>
				<div className={styles.right}>
					<div className={styles.desc}></div>
					<div className={styles.desc}></div>
					<div className={styles.desc}></div>
					<div className={styles.desc}></div>
				</div>
			</div>
		)
	}
}

export default RowSkeleton