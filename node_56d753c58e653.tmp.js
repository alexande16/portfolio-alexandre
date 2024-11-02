<!DOCTYPE html>
<html lang="pt-BR" class="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://unpkg.com/scrollreveal"></script>
    <title>Alexandre Oliveira</title>
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link
    rel="stylesheet"
  />
</head>

<body>
    <nav>
        <ul>
            <div id="navegation">
                <label class="switch">
                    <input type="checkbox" onclick="modo()">
                    <span class="slider"></span>
                </label>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#sobre">Sobre mim</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
            </div>
        </ul>
    </nav>

    <main>
        <section id="principal">
            <div id="container">
                <div id="text">
                    <h1 class="texto-1">Alexandre Oliveira</h1>
                    <p class="texto-2">Web Developer</p>
                    <div id="icon">
                        <a href="https://github.com/alexande16" target="_blank"><i class='bx bxl-github'></i></a>
                        <a href="https://wa.me/71991989459" target="_blank"><i class='bx bxl-whatsapp'></i></a>
                        <a href="https://www.linkedin.com/in/alexandre-oliveira-35a62b210/" target="_blank"><i
                                class='bx bxl-linkedin-square'></i></a>
                    </div>
                </div>
                <img class="img-principal" src="imagens/imagem-principal.png" alt="foto" width="550px">
            </div>
        </section>

        <section id="sobre">
            <div class="container-sobre">
                <img class="img-sobre" src="imagens/img-sobremim.png" alt="sobre" width="550px">
                <div class="text-sobre">
                    <h3 class="texto-sobre">Olá, meu nome é Alexandre e sou apaixonado por tecnologia, estou estudando a
                        1 ano e gostaria de levar esses estudos a frente, me especializar na área, e ser um profissional
                        no que faço.</h3>
                    <a href="arquivo/Curriculo.pdf" download="">
                        <button>Baixar CV</button></a>
                </div>
            </div>
        </section>

        <section id="projetos">
            <h1 class="titulo-projeto">Projetos</h1>
            <div class="water">
                <img  class="img-water" src="imagens/water.png" alt="" width="50px">
                <h4 class="text-water">Calculador de água</h4>
                <p class="text-2water">Calcule quantos litros de água deve se beber no dia de acordo com seu peso</p>
                <a href="https://water-calculator.netlify.app/" target="_blank"><button class="btn-water">Ver projeto</button></a>
            </div>
            <div class="escolar">
                <img  class="img-escolar" src="imagens/student.png" alt="" width="75px">
                <h4 class="text-escolar">Sistema de notas escolar</h4>
                <p class="text-2escolar">Calcule a media do aluno de acordo com suas notas e consiga sua media final</p>
                <a href="https://sistema-escolar.netlify.app/" target="_blank"><button class="btn-escolar">Ver projeto</button></a>
            </div>
        </section>

        <section id="habilidades">
                <h1 class="titulo-skills">Skills</h1>
                <div class="html">
                    <h2 class="titulo-html">HTML 5</h2>
                    <img class="img-html" src="imagens/html-5.png" alt="html" width="70px">
                </div>
                <div class="css">
                    <h2 class="titulo-css">CSS 3</h2>
                    <img class="img-css" src="imagens/css-3.png" alt="css" width="70px">
                </div>
                <div class="javascript">
                    <h3 class="titulo-javascript">Javascript</h3>
                    <img class="img-javascript" src="imagens/js.png" alt="js" width="70px">
                </div>
                <div class="bootstrap">
                    <h3 class="titulo-boot">Bootstrap</h3>
                   <img class="img-boot" src="imagens/bootstrap.png" alt="boot" width="70px">
                </div>  
        </section>
    </main>
    <a href="#navegation">
        <div id="back">Voltar ao topo</div>
    </a>
    <script src="script.js"></script>

</body>

</html>