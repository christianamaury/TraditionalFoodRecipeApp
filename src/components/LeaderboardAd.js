import React, {Component} from "react"

class LeaderBoardAd extends Component{
  componentDidMount(){
    (window.adsbygoogle || window.adsbygoogle ||[]).push({})
  }

  render() {
    return(
      <div>
        <ins className="adsbygoogle"
          style={ {display:"inline-block", width: "728px", height:"90px"}}
          data-ad-client="putmyClientID"
          data-ad-slot="numberSlotHere">
        </ins>
      </div>
    )
  }
}

export default LeaderBoardAd
