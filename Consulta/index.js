function Leer(){
    const number = document.getElementById("input").value;
    const api_url=`https://api.breakingbadquotes.xyz/v1/quotes/${number}`;
    SearchQ(api_url);
}
const SearchQ=async(api_url)=>{
    fetch(api_url)
        .then(data => {
            return data.json()
        }).then(resultado=>{
            console.log(resultado);
            document.getElementById("lista").innerHTML=``;

            resultado.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px">
                    <div class="card-body">
                        <div class="mb-3">
                            <p>${p.quote}</p>
                            <p>${p.author}</p>
                        </div>
                    </div>
                </div>`;
            });
        });
}