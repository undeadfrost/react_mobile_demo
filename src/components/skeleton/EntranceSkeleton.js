import React, {Component} from 'react'
import './index.css'

class EntranceSkeleton extends Component {
	render() {
		return (
			<div className="entrance_skeleton">
				{
					Array.from({length: 10}, (value, index) => index).map((value) => (
						<div className="item">
							<div className="circle"></div>
							<div className="desc"></div>
						</div>
					))
				}
			</div>
		)
	}
}

export default EntranceSkeleton