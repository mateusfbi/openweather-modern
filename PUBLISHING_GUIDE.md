# Guia de Publicação no GNOME Extensions

Este guia detalha como publicar a extensão **OpenWeather Modern** no [extensions.gnome.org](https://extensions.gnome.org).

## 📋 Pré-requisitos

Antes de publicar, certifique-se de que:

- [ ] A extensão está funcionando corretamente em todas as versões do GNOME Shell suportadas (45, 46, 47)
- [ ] Todos os testes foram executados com sucesso
- [ ] O código está limpo e sem erros no console
- [ ] O `metadata.json` está configurado corretamente
- [ ] Você tem screenshots de alta qualidade da extensão

## 🔑 Passo 1: Criar Conta no GNOME Extensions

1. Acesse [extensions.gnome.org](https://extensions.gnome.org)
2. Clique em **"Login"** no canto superior direito
3. Faça login com sua conta GNOME (ou crie uma nova)
4. Você precisará de uma conta GNOME GitLab para autenticação

## 📦 Passo 2: Preparar o Pacote para Upload

### 2.1 Gerar o arquivo ZIP

```bash
# No diretório do projeto
make zip-file
```

Isso criará um arquivo chamado `gnome-shell-extension-openweather-v122.zip` (ou versão atual).

### 2.2 Verificar o conteúdo do ZIP

```bash
# Verificar estrutura do arquivo
unzip -l gnome-shell-extension-openweather-v*.zip
```

O arquivo deve conter:
- `metadata.json`
- `extension.js`
- `prefs.js`
- `stylesheet.css`
- `schemas/` (com schemas compilados)
- `locale/` (traduções)
- `media/` (ícones)
- Outros arquivos necessários

### 2.3 Validar metadata.json

Certifique-se de que o `metadata.json` contém:

```json
{
  "uuid": "openweather-modern@mateusfbi.gmail.com",
  "name": "OpenWeather Modern",
  "description": "Modern fork of OpenWeather for GNOME Shell 45+ with ESM modules",
  "shell-version": ["45", "46", "47"],
  "url": "https://github.com/mateusfbi/openweather-modern",
  "version": 122
}
```

> [!IMPORTANT]
> O `uuid` deve ser **único** e não pode conflitar com outras extensões. Como este é um fork, você está usando `openweather-modern@mateusfbi.gmail.com` que é diferente do original.

## 🚀 Passo 3: Fazer o Upload

1. Acesse [extensions.gnome.org/upload/](https://extensions.gnome.org/upload/)
2. Clique em **"Choose File"** e selecione o arquivo ZIP gerado
3. Faça o upload do arquivo
4. O sistema validará automaticamente:
   - Estrutura do arquivo
   - Sintaxe do `metadata.json`
   - Compatibilidade com versões do GNOME Shell
   - Schemas GSettings

### 3.1 Possíveis Erros de Validação

Se houver erros, corrija-os e gere um novo ZIP:

| Erro | Solução |
|------|---------|
| `Invalid metadata.json` | Verifique a sintaxe JSON |
| `Missing gschemas.compiled` | Execute `make` antes de `make zip-file` |
| `Shell version not supported` | Atualize `shell-version` no `metadata.json` |
| `UUID already exists` | Use um UUID único (já está correto) |

## 📝 Passo 4: Preencher Informações da Extensão

Após o upload bem-sucedido, você precisará preencher:

### 4.1 Informações Básicas

- **Nome**: OpenWeather Modern
- **Descrição**: Descrição detalhada em inglês
- **URL**: https://github.com/mateusfbi/openweather-modern
- **Categoria**: Weather

### 4.2 Descrição Detalhada (Sugestão)

```markdown
OpenWeather Modern is a modernized fork of the popular OpenWeather extension, 
migrated to ESM modules for GNOME Shell 45, 46, and 47 compatibility.

Features:
• Display weather conditions for any location on Earth
• 3-hour forecasts for up to 5 days
• Multiple locations with editable names
• Beautiful, modern layout
• Fully migrated to ECMAScript Modules (ESM)

Weather data is provided by OpenWeatherMap.

This is a fork of the original OpenWeather extension by Jason Oickle (@skrewball) 
and Jens Lody (@jenslody), updated to support modern GNOME Shell versions.
```

### 4.3 Screenshots

Prepare screenshots de alta qualidade (PNG, 1920x1080 recomendado):

1. **Screenshot principal**: Extensão ativa no painel
2. **Screenshot de preferências**: Janela de configurações
3. **Screenshot de funcionalidades**: Previsão expandida

```bash
# Tirar screenshot no GNOME
gnome-screenshot -w  # Janela específica
gnome-screenshot -a  # Área selecionada
```

## ✅ Passo 5: Submeter para Revisão

1. Revise todas as informações
2. Clique em **"Submit for Review"**
3. Aguarde a aprovação da equipe do GNOME (pode levar alguns dias)

## 📧 Passo 6: Aguardar Aprovação

- Você receberá um email quando a extensão for aprovada ou se houver problemas
- A equipe pode solicitar mudanças antes da aprovação
- Após aprovação, a extensão ficará disponível publicamente

## 🔄 Atualizações Futuras

Para publicar uma nova versão:

1. Atualize o número da `version` no `metadata.json`
2. Gere um novo ZIP: `make zip-file`
3. Acesse sua extensão em extensions.gnome.org
4. Clique em **"Upload New Version"**
5. Faça upload do novo ZIP

> [!TIP]
> Mantenha um changelog para documentar as mudanças entre versões.

## ⚠️ Considerações Importantes

### UUID e Fork

Como este é um **fork** da extensão original, você está usando um UUID diferente:
- **Original**: `openweather-extension@jenslody.de`
- **Seu fork**: `openweather-modern@mateusfbi.gmail.com`

Isso significa que:
- ✅ Usuários podem instalar ambas as extensões simultaneamente
- ✅ Não há conflito de UUID
- ⚠️ Deixe claro na descrição que é um fork

### Licença

A extensão usa **GPLv3**. Certifique-se de:
- Manter os créditos originais (já está no `AUTHORS` e `AUTHORS_FORK`)
- Incluir o arquivo `COPYING` no ZIP (já incluído pelo Makefile)

### Manutenção

- Monitore issues reportados pelos usuários
- Mantenha compatibilidade com novas versões do GNOME Shell
- Responda a comentários e avaliações

## 🔗 Links Úteis

- [GNOME Extensions Upload](https://extensions.gnome.org/upload/)
- [Documentação de Extensões](https://gjs.guide/extensions/)
- [Diretrizes de Revisão](https://wiki.gnome.org/Projects/GnomeShell/Extensions/Review)
- [API do GNOME Shell](https://gjs-docs.gnome.org/)

## 📊 Checklist Final

Antes de submeter, verifique:

- [ ] Extensão testada em GNOME 45, 46 e 47
- [ ] Sem erros no `journalctl`
- [ ] Screenshots de alta qualidade preparados
- [ ] Descrição em inglês clara e completa
- [ ] Créditos aos autores originais incluídos
- [ ] Arquivo ZIP gerado e validado
- [ ] URL do repositório GitHub atualizada
- [ ] Versão no `metadata.json` está correta

---

**Boa sorte com a publicação! 🚀**
