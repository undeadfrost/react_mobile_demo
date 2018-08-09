import React, {Component, Fragment} from 'react'
import EntranceSkeleton from '../skeleton/EntranceSkeleton'
import RowSkeleton from '../skeleton/RowSkeleton'
import './index.css'

class SkeletonScreen extends Component {
	render() {
		return (
			<Fragment>
				<EntranceSkeleton/>
				<div className="row_list">
					{
						Array.from({length: 10}, (value, index) => index).map(value => (
							<RowSkeleton/>
						))
					}
				</div>
			</Fragment>
		)
	}
}

export default SkeletonScreen