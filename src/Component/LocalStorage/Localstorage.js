const getGadget = () => {
                    const StoredGadget = localStorage.getItem('gadget')
                    if(StoredGadget){
                                        return(JSON.parse(StoredGadget))
                    }
                    else{
                                        return []
                    }
}

const addToLStorage = gadget => {
                    const StoredGadget = getGadget()
                    StoredGadget.push(gadget)
                    const gadgetStringify = JSON.stringify(StoredGadget)
                    localStorage.setItem('gadget',gadgetStringify)
}



const getGadget2 = () => {
                    const StoredGadget = localStorage.getItem('gadget2')
                    if(StoredGadget){
                                        return(JSON.parse(StoredGadget))
                    }
                    else{
                                        return []
                    }
}

const addToLStorage2 = gadget => {
                    const StoredGadget = getGadget2()
                    StoredGadget.push(gadget)
                    const gadgetStringify = JSON.stringify(StoredGadget)
                    localStorage.setItem('gadget2',gadgetStringify)
}

export {addToLStorage, getGadget, addToLStorage2, getGadget2 };