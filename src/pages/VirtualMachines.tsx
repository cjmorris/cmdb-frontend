import '../styles/virtualMachines.css'

function VirtualMachines() {
    return (
        <>
            <div className='content'>
                <h2>Add Virtual Machine</h2>
                <p className='description'>Create and add a new virtual machines to HiveCMDB, with options to choose resources, configuration settings and applications.</p>
                <div className='vm-grid'>
                    <div className='vm-grid-item'>
                        <label className='vm-label'>Name</label>
                        <input className='vm-input' type='text' placeholder='e.g. Hostname'></input>
                    </div>
                    <div className='vm-grid-item'>
                        <label className='vm-label'>IP Address</label>
                        <input className='vm-input' type='text' placeholder='X.X.X.X'></input>
                    </div>
                    <div className='vm-grid-item'>
                        <label className='vm-label'>Description</label>
                        <input className='vm-input' type='text' placeholder='What is it used for?'></input>
                    </div>
                    <div className='vm-grid-item'>
                        <label className='vm-label'>FQDN</label>
                        <input className='vm-input' type='text' placeholder='e.g. Hostname.Domain'></input>
                    </div>
                    <div className='vm-grid-item'>
                        <label className='vm-label'>Domain</label>
                        <input className='vm-input' type='text' placeholder='e.g. Domain Name'></input>
                    </div>
                    <div className='vm-grid-item'>
                        <label className='vm-label'>Operating System</label>
                        <input className='vm-input' type='text' placeholder='e.g. Windows/Linux'></input>
                    </div>
                    <div className='vm-grid-item'>
                        <label className='vm-label'>Owner</label>
                        <input className='vm-input' type='text' placeholder='e.g. John Smith'></input>
                    </div>
                    <div className='vm-grid-item'>
                        <label className='vm-label'>RAM</label>
                        <input className='vm-input' type='text' placeholder='e.g. 4GB'></input>
                    </div>
                    <div className='vm-grid-item'>
                        <label className='vm-label'>CPUs</label>
                        <input className='vm-input' type='text' placeholder='# of Cores'></input>
                    </div>
                </div>
                <button className='button' type='submit'>Create</button>
            </div>
        </>
    )
}

export default VirtualMachines