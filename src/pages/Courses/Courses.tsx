import React from 'react'
import styled, { css } from 'styled-components'
import { Title } from 'styles/typography'
import { COLORS } from 'styles/variables'
import { contents } from 'mocks/data.json'
import Button from 'components/Button'

const Container = styled.section`
  padding: 4rem 2rem;
`

const Heading = styled.header``

const Inputs = styled.div``

const HeadingText = styled.h1(() => Title)

const Table = styled.table`
  min-width: 60rem;
  margin-top: 2.5rem;
  overflow: auto;
`

const TableData = styled.td<{ align?: string; divider?: number }>(
  ({ divider = 5, align }) => css`
    color: #999;
    padding: 2rem 0;
    font-size: 1.4rem;
    width: calc(100% / ${divider});
    text-align: ${align || 'left'};

    &:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }
  `
)

const TableHeading = styled(TableData)`
  font-weight: 500;
  font-size: 1.4rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  color: ${COLORS.primaryLight};
`

interface Course {
  company: string
  Id: number
  Status: string
  Name: string
  Quantity: string
  Description: string
}

const Courses: React.FC = () => {
  const coursesList: Course[] = contents.reduce(
    (acc, content) => [
      ...acc,
      ...(content.Courses.map(course => ({
        company: content.Company,
        ...course
      })) as never[])
    ],
    []
  )

  return (
    <Container>
      <Heading>
        <HeadingText>Painel de cursos</HeadingText>
        <Inputs></Inputs>
      </Heading>

      <Table cellSpacing={0}>
        <thead>
          <tr>
            <TableHeading>Empresa</TableHeading>
            <TableHeading>Nome do curso</TableHeading>
            <TableHeading>Descrição</TableHeading>
            <TableHeading align='center'>Num. de alunos</TableHeading>
            <TableHeading align='right'>Edição e conteúdo</TableHeading>
          </tr>
        </thead>
        <tbody>
          {coursesList.map(course => (
            <tr>
              <TableData>{course.company}</TableData>
              <TableData>{course.Name}</TableData>
              <TableData divider={4}>{course.Description}</TableData>
              <TableData align='center'>{course.Quantity}</TableData>
              <TableData align='right'>
                <Button>Button</Button>
              </TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export { Courses }
