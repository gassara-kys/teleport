/*
Copyright 2015 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



import React from 'react';
import { connect } from 'app/components/nuclear';
import sessionGetters from 'app/flux/sessions/getters';

const PartyList = props => {
  let parties = props.parties || [];
  let userIcons = parties.map((item, index)=>(
    <div key={index} className="animated m-t">
      <div colorIndex={index}
        isDark={true}
        name={item.user} />
    </div>
  ));

  return (
    <div className="m-t">
    <hr className="grv-divider m-t" />
      {userIcons}
    </div>
  )
}

function mapStateToProps(props) {
  return {
    parties: sessionGetters.activePartiesById(props.sid)
  }
}

export default connect(mapStateToProps)(PartyList)