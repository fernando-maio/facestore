<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>Teste Facestore</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>SKU</th>
                <th>URL Vídeo</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="2" align="center">Carregando...</td>
            </tr>
        </tbody>
    </table>
    <div>
        <button id="primeiro" data-link="0">&lsaquo;&lsaquo; Primeira</button>
        <button id="anterior" data-link="0">&lsaquo; Anterior</button>
            <span id="numeracao"></span>
        <button id="proximo" data-link="0">Próxima &rsaquo;</button>
        <button id="ultimo" data-link="0">Ultima &rsaquo;&rsaquo;</button>
    </div>
   
    <!-- Scripts -->
    <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="{{ asset('/js/produtos.js') }}"></script>
</body>
</html>
