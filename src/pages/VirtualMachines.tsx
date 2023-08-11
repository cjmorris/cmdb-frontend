import '../styles/virtualMachines.css'

function VirtualMachines() {
    return (
        <>
            <div className='content'>
                <h2>Add Virtual Machine</h2>
                <p className='description'>Create and add a new virtual machines to HiveCMDB, with options to choose resources, configuration settings and applications.</p>
                <div className='grid vm-grid'>
                    <div className='grid-item'>
                        <label className='label'>Name</label>
                        <input className='input' type='text' placeholder='e.g. Hostname'></input>
                    </div>
                    <div className='grid-item'>
                        <label className='label'>IP Address</label>
                        <input className='input' type='text' placeholder='X.X.X.X'></input>
                    </div>
                    <div className='grid-item'>
                        <label className='label'>Description</label>
                        <input className='input' type='text' placeholder='What is it used for?'></input>
                    </div>
                    <div className='grid-item'>
                        <label className='label'>FQDN</label>
                        <input className='input' type='text' placeholder='e.g. Hostname.Domain'></input>
                    </div>
                    <div className='grid-item'>
                        <label className='label'>Domain</label>
                        <input className='input' type='text' placeholder='e.g. Domain Name'></input>
                    </div>
                    <div className='grid-item'>
                        <label className='label'>Operating System</label>
                        <input className='input' type='text' placeholder='e.g. Windows/Linux'></input>
                    </div>
                    <div className='grid-item'>
                        <label className='label'>Owner</label>
                        <input className='input' type='text' placeholder='e.g. John Smith'></input>
                    </div>
                    <div className='grid-item'>
                        <label className='label'>RAM</label>
                        <input className='input' type='text' placeholder='e.g. 4GB'></input>
                    </div>
                    <div className='grid-item'>
                        <label className='label'>CPUs</label>
                        <input className='input' type='text' placeholder='# of Cores'></input>
                    </div>
                </div>
                <button className='button' type='submit'>Create</button>
            </div>
        </>
    )
}

export default VirtualMachines