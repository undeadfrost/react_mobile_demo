import React, {Component, Fragment} from 'react'
import EntranceSkeleton from '../skeleton/EntranceSkeleton'
import RowSkeleton from '../skeleton/RowSkeleton'
import styles from './index.less'

class SkeletonScreen extends Component {
	render() {
		return (
			<Fragment>
				<EntranceSkeleton/>
				<div className={styles.row_list}>
					{
						Array.from({length: 10}, (value, index) => index).map(value => (
							<RowSkeleton key={value}/>
						))
					}
				</div>
			</Fragment>
		)
	}
}

export default SkeletonScreen