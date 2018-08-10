import React, {Component} from 'react'
import styles from './index.less'

class EntranceSkeleton extends Component {
	render() {
		return (
			<div className={styles.entrance}>
				{
					Array.from({length: 10}, (value, index) => index).map((value) => (
						<div className={styles.item} key={value}>
							<div className={styles.circle}></div>
							<div className={styles.desc}></div>
						</div>
					))
				}
			</div>
		)
	}
}

export default EntranceSkeleton