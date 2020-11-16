<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="description" content="Faça seu login no Facebook aqui!!">
    <meta name="keywords" content="Facebook,Login on Facebook,Login,Entrar,Cadastrar">
    <meta name="author" content="Matheus Eduardo">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="style.css">
    <title>Login Facebook</title>
</head>
<body>
    <header>
        <div class="center">
            <div class="logo">
                <h2>Facebook</h2>
            </div><!--logo-->
            <form method="post" class="form-login">

                <div class="form-element">
                    <p>Email ou telefone</p>
                    <input type="email">
                </div><!--form-element-->

                <div class="form-element">
                    <p>Senha</p>
                    <input type="password">
                </div><!--form-element-->

                <div class="form-element">
                     <input type="submit" name="acao" value="Entrar">
                </div><!--form-element-->
                
            </form><!--form-login-->
            <div class="clear"></div>
        </div><!--center-->
    </header>

    <section class="main">
        <div class="center">
            <div class="img-dj">
                <!--<img src="png_1.png">-->
            </div><!--img-dj-->
            
            <div class="abrir-conta">
                <h2>Lorem Ipsun</h2>
                <h3>Lorem ipsum dolor, sit amet</h3>

                <form class="criar-conta">
                    <div class="w50">
                        <input type="text" placeholder="Nome">
                    </div><!--w50-->

                    <div class="w50">
                        <input type="text" placeholder="Sobrenome">
                    </div><!--w50-->

                    <div class="w100">
                        <input type="email" placeholder="Email">
                    </div><!--w100-->

                    <div class="w100">
                        <input type="password" placeholder="Senha">
                    </div><!--w100-->

                    <div class="w100">
                        <h2>Data de nascimento:</h2>
                        <select name="nascimento-dia" class="nascimento">
                            <?php
                                for($i = 1; $i <=31; $i++){
                            ?>
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                <?php } ?>
                        </select>
                        <select name="nascimento-mes" class="nascimento">
                            <option value="1">Janeiro</option>
                            <option value="2">Fevereiro</option>
                            <option value="3">Março</option>
                            <option value="4">Abril</option>
                            <option value="5">Maio</option>
                            <option value="6">Junho</option>
                            <option value="7">Julho</option>
                            <option value="8">Agosto</option>
                            <option value="9">Setembro</option>
                            <option value="10">Outubro</option>
                            <option value="11">Novembro</option>
                            <option value="12">Dezembro</option>
                        </select>
                        <select name="nascimento-ano" class="nascimento">
                        <?php
                                for($i = 1960; $i <=2020; $i++){
                            ?>
                            <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                <?php } ?>
                        </select>
                        <div class="clear"></div>
                    </div><!--w100-->

                    <div class="w100">
                        <div class="input-radio">
                                <input type="radio" name="sexo" value="masculino">
                                <h2>Masculino</h2>
                        </div><!--input-radio-->

                        <div class="input-radio">
                            <input type="radio" name="sexo" value="Feminino">
                            <h2>Feminino</h2>
                    </div><!--input-radio-->
                    <div class="clear"></div>
                    </div><!--w100-->

                    <div class="w100">
                        <input type="submit" name="acao" value="Cadastrar!">
                    </div><!--w100-->

                    <div class="clear"></div>
                </form><!--criar-conta-->

            </div><!--abrir-conta-->

            <div class="clear"></div>
        </div><!--center-->
    </section><!--main-->

    <section class="linguas">
        <div class="center">
            <a class="selected-lingua" href="#">Português (BR)</a>
            <a href="#">Espanhol</a>
            <a href="#">Inglês</a>
            <a href="#">Chinês</a>
            <a href="#">Francês</a>
            <a href="#">Russo</a>
            <a href="#">Português</a>
            <a href="#">Italiano</a>
            <a href="#">Holandes</a>
            <a href="#">Árabe</a>
        </div><!--center-->
    </section><!--linguas-->
    
</body>
</html>