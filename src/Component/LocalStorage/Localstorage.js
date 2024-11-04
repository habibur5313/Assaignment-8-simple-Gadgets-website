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

export {addToLStorage, getGadget};

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
                    const StoredGadget = getGadget()
                    StoredGadget.push(gadget)
                    const gadgetStringify = JSON.stringify(StoredGadget)
                    localStorage.setItem('gadget2',gadgetStringify)
}

export {addToLStorage2, getGadget2};