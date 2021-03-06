<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">TILTIL</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/Nexters/TILTIL_FRONT)](https://github.com/Nexters/TILTIL_FRONT/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/Nexters/TILTIL_FRONT)](https://github.com/Nexters/TILTIL_FRONT/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## π Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## π§ About <a name = "about"></a>

3μ΄..? 3λΆ..? λ§μ μ±μ₯μ λλͺ¨ν  μ μλ **TILTIL**

## π Getting Started <a name = "getting_started"></a>

μ΄λ¬ν μ§μΉ¨μ κ°λ° λ° νμ€νΈ λͺ©μ μΌλ‘ λ‘μ»¬ μ»΄ν¨ν°μμ μ€ν μ€μΈ νλ‘μ νΈμ λ³΅μ¬λ³Έμ μ κ³΅ν©λλ€. λΌμ΄λΈ μμ€νμ νλ‘μ νΈλ₯Ό λ°°ν¬νλ λ°©λ²μ [deployment](#deployment)λ₯Ό μ°Έμ‘°νμ­μμ€.

### Prerequisites

**TILTIL** μ€νμ νμν μ¬ν­ λ° μ€μΉ λ°©λ²

- OSX
- Node v16.13
- yarn v3
- Docker

### Installing

κ°λ° νκ²½ μ€ν λ¨κ³μ  μλ΄

Clone repository

```
git clone git@github.com:Nexters/TILTIL_FRONT.git
```

Change directory

```
cd ./TILTIL_FRONT
```

λ‘μ»¬ κ°λ°νκ²½ μ€ν

```
<!-- ν¬νΈ `3000`ν¬νΈ μ μ -->
yarn && yarn dev
```

Docker κ°λ°νκ²½ μ€ν

```
<!-- ν¬νΈ `9000`ν¬νΈ μ μ -->
docker-compose up
```

## π§ Running the tests <a name = "tests"></a>

```
yarn test
```

## π Usage <a name="usage"></a>

### https μ μ©

/etc/hosts μ λ΄μ© μΆκ°

```
curl -sSL https://gist.githubusercontent.com/zi-gae/3a8864e48fded7448b76d6e3732df1c5/raw/17778cb61e3d41516faf5c4ec50ef2f2cdab4a9e/bingbong-etc-host.sh | sh
```

.pem νμΌ μΆκ°

```bash
brew install mkcert
mkcert -install
mkcert bing-bong.today "*.bing-bong.today" localhost ::3
```

### RUN

μ€ν

```
yarn dev
```

## π Deployment <a name = "deployment"></a>

λ°°ν¬.. λ©μ΄λΉ.. λμ»€λ‘.. ν κ±°λκΉ.. ec2 μλλ©΄ fargate.. CD κ΅¬μΆν΄μ.. ν .. κ².. κ°.. μ.. λ°..?

## βοΈ Built Using <a name = "built_using"></a>

- [Next](https://nextjs.org/) - Web Framework
- [Typescript](https://vuejs.org/) - Language
- [react-query](https://nodejs.org/en/) - Server state

## βοΈ Authors <a name = "authors"></a>

- [@zi-gae](https://github.com/zi-gae)
- [10000peach](https://github.com/1000peach)
- [Yuni-Q](https://github.com/Yuni-Q)
- [BuildTheTruth](https://github.com/BuildTheTruth)

νλ‘μ νΈμ μ°Έμ¬ν [contributors](https://github.com/Nexters/TILTIL_FRONT/graphs/contributors) νμΈνκΈ°
