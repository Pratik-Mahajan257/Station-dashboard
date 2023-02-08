import React from 'react';
import Chat from './components/Chat';
import Mails from './components/Mails';
import Menubar from './components/Menubar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="bg-[#F7F7F7] h-screen w-screen  grid grid-flow-col auto-cols-max  ">
    <Sidebar />
    <Menubar />
    <Mails />
    <Chat 
    profilePicture="https://resources-live.sketch.cloud/files/5470c7b9-ea34-407b-aaf3-24da407e2ca1.png?Expires=1676109600&Signature=k7Tvt0ushoGwWIsCbqUXtDUzX9-MRXM5L6jGNaiET2HIoS2nnQmwFfDNH00AHbdeZ4ycrrkdFwJje2L1immbefY8wM-mB-wS4xB3XtyxfZIS~xtVRjrhdie72vVOpZp8WIJHQZX8K3SqEg-LlIn5U~ANMYgHpTUnrDS8ocZcXN8_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA"
    name='mark'
    />
    </div>
  );
}

export default App;
