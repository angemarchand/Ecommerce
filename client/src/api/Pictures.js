export const POSTPicture = async (tabName, id_product, tabImagesB64) => {
    
    let i = 0;
    let product = [];
    // for (let element of tabName)
    // {
        console.log(`name:${tabName[0]}, id_product:${parseInt(id_product)}, alt:${null}, image_b64:${tabImagesB64[i]}`);
        const response = await fetch('https://localhost:8000/api/pictures', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                name: tabName[0],
                id_product: parseInt(id_product),
                alt: null,
                image_b64: tabImagesB64[i]
            })
        })
    //     product.push(await response.json());
    //     i++;
    // };
    
    return product;
}