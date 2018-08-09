import React, {Component} from 'react'

class RowSkeleton extends Component {
	render() {
		return (
			<div className="row_skeleton">
				<div className="left"></div>
				<div className="right">
					<div className="desc"></div>
					<div className="desc"></div>
					<div className="desc"></div>
					<div className="desc"></div>
				</div>
			</div>
		)
	}
}

export default RowSkeleton